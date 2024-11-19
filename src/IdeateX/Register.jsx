'use client'
import React from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; 
import { Plus, X, Copy, Upload } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import Header from "./components/Header"
import Pay from "./public/Payment.jpg"
import { send } from "emailjs-com";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog"
import {Link } from 'react-router-dom';
import Logo from "./public/IdeateX_Logo.png"
// interface TeamMember {
//   id: number
//   name: string
//   year: string
//   libId: string
//   email: string
//   number: string
//   gender: string
// }

// interface Team {
//   id: number
//   name: string
//   members: TeamMember[]
// }

export default function Register() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: '',
      members: [
        {
          id: 1,
          name: '',
          year: '',
          libId: '',
          email: '',
          number: '',
          gender: ''
        }
      ]
    }
  ])

  const [validationErrors, setValidationErrors] = useState({
    email: {},
    phone: {}
  });

  const addTeamMember = (teamId) => {
    if(Array.isArray(teams[0].members) && teams[0].members.length < 4) {
      setTeams(teams.map(team => 
        team.id === teamId
          ? {
              ...team,
              members: [
                ...team.members,
                {
                  id: team.members.length + 1,
                  name: '',
                  year: '',
                  libId: '',
                  email: '',
                  number: '',
                  gender: ''
                }
              ]
            }
          : team
      ))
    }
  }

  const removeTeamMember = (teamId, memberId) => {
    setTeams(teams.map(team => 
      team.id === teamId
        ? {
            ...team,
            members: team.members.length > 1
              ? team.members.filter(member => member.id !== memberId)
              : team.members
          }
        : team
    ))
  }

  const handleTeamNameChange = (teamId, value) => {
    setTeams(teams.map(team => 
      team.id === teamId ? { ...team, name: value } : team
    ))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  }

  const handleMemberChange = (teamId, memberId, field, value) => {
    if (field === 'email') {
      setValidationErrors(prev => ({
        ...prev,
        email: {
          ...prev.email,
          [memberId]: !validateEmail(value)
        }
      }));
    }
    
    if (field === 'number') {
      setValidationErrors(prev => ({
        ...prev,
        phone: {
          ...prev.phone,
          [memberId]: !validatePhoneNumber(value)
        }
      }));
    }

    setTeams(teams.map(team => 
      team.id === teamId
        ? {
            ...team,
            members: team.members.map(member => 
              member.id === memberId ? { ...member, [field]: value } : member
            )
          }
        : team
    ))
  }

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState(null);


  const upiId = '8318536200@jupiteraxis'

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
      .then(() => alert('UPI ID copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setScreenshot(event.target.files[0])
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Check if screenshot is uploaded
    if (!screenshot) {
      alert("Please upload the payment screenshot.");
      setIsLoading(false);
      return; // Stop further execution
    }
    
    try {
      const paymentStatus = screenshot ? true : false;
  
      // If screenshot is not uploaded, show alert (this is redundant as it's already checked above)
      if (!paymentStatus) { 
        alert("Please upload payment screenshot.");
        setIsLoading(false);
        return;
      }
      
      let screenshotUrl = '';
      if (screenshot) {
        const storage = getStorage();
        const screenshotRef = ref(storage, `payments/${screenshot.name}`);
        const uploadTask = uploadBytesResumable(screenshotRef, screenshot);
        await uploadTask;
        screenshotUrl = await getDownloadURL(screenshotRef);
      }
    
      const teamData = {
        teamName: teams[0].name,
        email: teams[0].members[0].email,
        paymentStatus: paymentStatus,
        paymentScreenshotUrl: screenshotUrl,
        teamLeader: {
          ...teams[0].members[0],
          teamName: teams[0].name,
        },
        teamMembers: teams[0].members.slice(1).map((member) => ({
          ...member,
        })),
        transactionId: transactionId,
        isPaymentVerified: false,
      };
  
      await addDoc(collection(db, "registrations"), teamData);
      alert("REGISTRATION SUCCESSFULL!");
      setIsOpen(false);
      setTransactionId("");
      setScreenshot(null);
      setTeams([
        {
          id: 1,
          name: "",
          members: [
            {
              id: 1,
              name: "",
              year: "",
              libId: "",
              email: "",
              number: "",
              gender: "",
            },
          ],
        },
      ]);
    } catch (error) {
      console.error("Error saving team data: ", error);
      alert("Failed to save team data.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const validateAllFields = () => {
    let hasErrors = false;
    const errorMessages= [];

    teams[0].members.forEach((member, index) => {
      if (!validateEmail(member.email)) {
        errorMessages.push(`Invalid email for ${index === 0 ? 'Team Leader' : 'Team Member ' + (index + 1)}`);
        hasErrors = true;
      }
      if (!validatePhoneNumber(member.number)) {
        errorMessages.push(`Invalid phone number for ${index === 0 ? 'Team Leader' : 'Team Member ' + (index + 1)}`);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      alert(errorMessages.join('\n'));
      return false;
    }
    return true;
  };

  const allFieldsFilled = teams.every((team) =>
    team.name.trim() !== '' &&
    team.members.every((member) => 
      member.name.trim() !== '' &&
      member.year.trim() !== '' &&
      member.libId.trim() !== '' &&
      member.email.trim() !== '' &&
      member.number.trim() !== '' &&
      member.gender.trim() !== ''
    )
  );

  const handleNextClick = () => {

    if (validateAllFields()) {
      setIsOpen(true);
      addCollect();
    }
  };

  const addCollect = async () => {
    try {
      // Extract the team data
      const teamData = {
        teamName: teams[0].name,
        teamLeader: {
          ...teams[0].members[0],
          teamName: teams[0].name,
        },
        teamMembers: teams[0].members.slice(1).map((member) => ({
          ...member,
        })),
        email: teams[0].members[0].email,
      };
  
      // Add data to the new Firebase collection
      await addDoc(collection(db, "PartialRegister"), teamData);
  
      alert("Team details successfully saved to PartialRegister!");
      
    } catch (error) {
      console.error("Error saving team details to PartialRegister: ", error);
      alert("Failed to save team details.");
    }
  };
  
  const handleSendEmail = () => {
    // Replace 'teamLeaderEmail@example.com' with the actual email
    const teamLeaderEmail = teams[0].members[0].email;
console.log(teamLeaderEmail);

    const emailParams = {
      email: teamLeaderEmail, // Replace {{email}} in your template
    };

    send(
      "service_sr0ya8z", // Your EmailJS service ID
      "template_eub02sw", // Your EmailJS template ID
      emailParams,
      "Gd6NLZcL2Nu6F0ufQ" // Your EmailJS user ID
    )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // alert("Email sent to the team leader successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div id="resigter" className="relative bg-[#04000A] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <div className={`flex ${teams[0].members.length > 1 && 'md:pt-[8rem]'} pt-[4rem] hode items-center`}>
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center h-screen">
            <img className="w-[70%] sticky flex items-center justify-center" src={Logo} alt="" />
          </div>
          <div className="md:w-[60%] w-full md:p-8 p-6 pt-10 md:pt-8 flex items-center justify-center">
            <Card className="w-full mx-auto bg-gray-950 text-white">
              <div className="flex justify-between  align-middle">

              <CardHeader>
                <CardTitle className="text-2xl font-bold">Team Registration Form <br />(Registration Fees -- 200rs Only / Team)</CardTitle>
              </CardHeader>
              <Link to="/ideatex">
                <p className="text-white text-2xl p-4 md:p-10">X</p>
              </Link>
              </div>
              <CardContent className="space-y-8">
                {teams.map((team) => (
                  <div key={team.id} className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        id={`teamName-${team.id}`}
                        value={team.name}
                        onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                        className="block z-8 px-4 py-3 w-full text-white-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                        placeholder="Team Name"
                      />
                      <label
                        htmlFor={`teamName-${team.id}`}
                        className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-white-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                      >
                        Team Name
                      </label>
                    </div>
                    
                    {team.members.map((member, index) => (
                      <div key={member.id} className="space-y-4 relative">
                        <div className="absolute right-0 top-0">
                          {index !== 0 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeTeamMember(team.id, member.id)}
                              className="text-gray-400 hover:text-white"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <h3 className="font-bold">{index === 0 ? "Team Leader" : "Team Member " + (index + 1)}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              type="text"
                              required
                              id={`name-${team.id}-${member.id}`}
                              value={member.name}
                              onChange={(e) => handleMemberChange(team.id, member.id, 'name', e.target.value)}
                              className="block px-4 py-3 w-full text-white bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                              placeholder="Name"
                            />
                            <label
                              htmlFor={`name-${team.id}-${member.id}`}
                              className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                              Name
                            </label>
                          </div>

                          <div className="relative">
                            <select
                              id={`year-${team.id}-${member.id}`}
                              value={member.year}
                              onChange={(e) => handleMemberChange(team.id, member.id, 'year', e.target.value)}
                              className="block px-4 py-3 w-full text-white bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary"
                              required
                            >
                              <option value="" disabled>Select Year</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>

                          <div className="relative">
                            <input
                              type="text"
                              id={`libId-${team.id}-${member.id}`}
                              required
                              value={member.libId}
                              onChange={(e) => handleMemberChange(team.id, member.id, 'libId', e.target.value)}
                              className="block px-4 py-3 w-full text-white bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                              placeholder="Library ID"
                            />
                            <label
                              htmlFor={`libId-${team.id}-${member.id}`}
                              className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                              Library ID
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              type="email"
                              required
                              id={`email-${team.id}-${member.id}`}
                              value={member.email}
                              onChange={(e) => handleMemberChange(team.id, member.id, 'email', e.target.value)}
                              className={`block px-4 py-3 w-full text-white bg-gray-900 border-2 ${
                                validationErrors.email[member.id] ? 'border-red-500' : 'border-gray-800'
                              } rounded-lg focus:border-primary peer placeholder-transparent`}
                              placeholder="Email"
                            />
                            <label
                              htmlFor={`email-${team.id}-${member.id}`}
                              className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-placeholder-shown
                              peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                              Email
                            </label>
                            {validationErrors.email[member.id] && (
                              <span className="text-red-500 text-xs mt-1">Please enter a valid email address</span>
                            )}
                          </div>

                          <div className="relative">
                            <select
                              id={`gender-${team.id}-${member.id}`}
                              value={member.gender}
                              required
                              onChange={(e) => handleMemberChange(team.id, member.id, 'gender', e.target.value)}
                              className="block px-4 py-3 w-full text-white bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary"
                            >
                              <option value="" disabled hidden>
                                Select Gender
                              </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>

                          <div className="relative">
                            <input
                              type="tel"
                              id={`number-${team.id}-${member.id}`}
                              value={member.number}
                              onChange={(e) => handleMemberChange(team.id, member.id, 'number', e.target.value)}
                              className={`block px-4 py-3 w-full text-white bg-gray-900 border-2 ${
                                validationErrors.phone[member.id] ? 'border-red-500' : 'border-gray-800'
                              } rounded-lg focus:border-primary peer placeholder-transparent`}
                              placeholder="Contact Number"
                            />
                            <label
                              htmlFor={`number-${team.id}-${member.id}`}
                              className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                              Contact Number
                            </label>
                            {validationErrors.phone[member.id] && (
                              <span className="text-red-500 text-xs mt-1">Please enter a valid 10-digit phone number</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      onClick={() => addTeamMember(team.id)}
                      variant="outline"
                      className={`w-full ${teams[0].members.length === 4 && 'hidden'} border-dashed border-2 z-10 border-gray-700 hover:border-primary hover:bg-gray-900`}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Team Member
                    </Button>
                  </div>
                ))}

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full z-10 py-6 bg-white hover:scale-105 transition-all ease-linear text-base hover:bg-white text-black"
                      disabled={!allFieldsFilled}
                      onClick={handleNextClick}
                    >
                      Next
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
                    <DialogHeader>
                      <DialogTitle>Complete Payment of 200rs</DialogTitle>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                      >
                        <span className="text-3xl font-semibold">&times;</span>
                      </button>
                    </DialogHeader>
                    <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="h-64 w-64 bg-gray-200 flex items-center justify-center">
                          <img src={Pay} alt="" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-white">{upiId}</span>
                          <Button size="icon" variant="ghost" onClick={handleCopy}>
                            <Copy className="h-4 w-4 text-white" />
                            <span className="sr-only text-white">Copy UPI ID</span>
                          </Button>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="transactionId" className="text-white">Transaction ID</label>
                          <input
                            id="transactionId"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            placeholder="Enter transaction ID"
                            className="w-full p-2 border border-gray-400 rounded-md bg-gray-800 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="screenshot" className="text-white">Upload Payment Screenshot</label>
                          <div className="flex items-center space-x-2">
                            <input
                              id="screenshot"
                              type="file"
                              onChange={handleFileChange}
                              className="hidden"
                              accept="image/*"
                              required
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById('screenshot')?.click()}
                              className="text-white border-white hover:bg-gray-700"
                            >
                              <Upload className="mr-2 h-4 w-4 text-white" />
                              {screenshot ? 'Change File' : 'Choose File'}
                            </Button>
                            {screenshot && <span className="text-sm text-white">{screenshot.name}</span>}
                          </div>
                        </div>
                        <Button type="submit" className="h-12 w-full text-white bg-blue-600 hover:bg-blue-700"
                        onClick={handleSendEmail}
                        >
                          {/* {!screenshot && <span className="text-red-500">Payment Screenshot not Uploaded!</span>} */}
                          SUBMIT
                          <br />
                          200rs NO MORE NO LESS!!
                        </Button>
                      </form>
                      {isLoading && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                          <div className="border-8 border-t-8 border-gray-300 border-solid rounded-full w-16 h-16 animate-spin border-t-black"></div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}