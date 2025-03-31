import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TechHead = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 3;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ff88, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0x00ff88, 1);
    backLight.position.set(-1, 0.5, -1);
    scene.add(backLight);
    
    // Create head geometry - use an ellipsoid instead of a sphere for a more head-like shape
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    headGeometry.scale(0.8, 1.1, 0.9);
    
    // Create material with circuit-like texture
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff44,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
    });
    
    // Create head mesh
    const head = new THREE.Mesh(headGeometry, headMaterial);
    scene.add(head);
    
    // Create facial features
    const createFacialFeatures = () => {
      const faceGroup = new THREE.Group();
      
      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
      
      // Left eye
      const leftEye = new THREE.Mesh(
        eyeGeometry,
        new THREE.MeshBasicMaterial({ color: 0xaaffcc })
      );
      leftEye.position.set(-0.25, 0.2, 0.7);
      faceGroup.add(leftEye);
      
      // Right eye
      const rightEye = new THREE.Mesh(
        eyeGeometry,
        new THREE.MeshBasicMaterial({ color: 0xaaffcc })
      );
      rightEye.position.set(0.25, 0.2, 0.7);
      faceGroup.add(rightEye);
      
      // Nose
      const noseGeometry = new THREE.ConeGeometry(0.08, 0.3, 4);
      const nose = new THREE.Mesh(
        noseGeometry,
        new THREE.MeshStandardMaterial({ 
          color: 0x00ff88,
          emissive: 0x00ff44,
          emissiveIntensity: 0.2
        })
      );
      nose.rotation.x = -Math.PI / 2;
      nose.position.set(0, -0.05, 0.9);
      faceGroup.add(nose);
      
      // Mouth
      const mouthGeometry = new THREE.BoxGeometry(0.4, 0.05, 0.05);
      const mouth = new THREE.Mesh(
        mouthGeometry,
        new THREE.MeshBasicMaterial({ color: 0xaaffcc })
      );
      mouth.position.set(0, -0.3, 0.8);
      faceGroup.add(mouth);
      
      // Ears
      const earGeometry = new THREE.BoxGeometry(0.05, 0.2, 0.1);
      
      // Left ear
      const leftEar = new THREE.Mesh(
        earGeometry,
        new THREE.MeshStandardMaterial({ 
          color: 0x00ff88,
          emissive: 0x00ff44,
          emissiveIntensity: 0.2
        })
      );
      leftEar.position.set(-0.8, 0, 0);
      faceGroup.add(leftEar);
      
      // Right ear
      const rightEar = new THREE.Mesh(
        earGeometry,
        new THREE.MeshStandardMaterial({ 
          color: 0x00ff88,
          emissive: 0x00ff44,
          emissiveIntensity: 0.2
        })
      );
      rightEar.position.set(0.8, 0, 0);
      faceGroup.add(rightEar);
      
      return faceGroup;
    };
    
    const facialFeatures = createFacialFeatures();
    head.add(facialFeatures);
    
    // Create circuit pattern
    const circuitGroup = new THREE.Group();
    
    // Circuit lines across the head
    for (let i = -0.8; i <= 0.8; i += 0.2) {
      // Horizontal lines
      const hLineGeometry = new THREE.TorusGeometry(1, 0.01, 16, 32, Math.PI);
      const hLine = new THREE.Mesh(
        hLineGeometry,
        new THREE.MeshBasicMaterial({ color: 0x88ffaa, transparent: true, opacity: 0.7 })
      );
      hLine.rotation.x = Math.PI / 2;
      hLine.position.y = i * 0.8;
      circuitGroup.add(hLine);
      
      // Vertical lines
      if (i > -0.7 && i < 0.7) {
        const vLineGeometry = new THREE.TorusGeometry(0.8, 0.01, 16, 32, Math.PI);
        const vLine = new THREE.Mesh(
          vLineGeometry,
          new THREE.MeshBasicMaterial({ color: 0x88ffaa, transparent: true, opacity: 0.7 })
        );
        vLine.rotation.y = Math.PI / 2;
        vLine.position.x = i;
        circuitGroup.add(vLine);
      }
    }
    
    // Add some small glowing blocks to represent circuit elements
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 0.05 + 0.02;
      const boxGeometry = new THREE.BoxGeometry(size, size, 0.01);
      const boxMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xaaffcc,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.5
      });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      
      // Position randomly on the head
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 1.01; // Slightly larger than head radius
      
      box.position.x = radius * Math.sin(phi) * Math.cos(theta);
      box.position.y = radius * Math.cos(phi);
      box.position.z = radius * Math.sin(phi) * Math.sin(theta);
      
      // Orient box to face outward
      box.lookAt(0, 0, 0);
      
      circuitGroup.add(box);
    }
    
    head.add(circuitGroup);
    
    // Animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate head slightly
      head.rotation.y += 0.005;
      
      // Pulse effect
      const time = Date.now() * 0.001;
      headMaterial.emissiveIntensity = 0.2 + Math.sin(time * 2) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div className="w-full h-64 md:h-96 bg-black rounded-lg shadow-lg" ref={containerRef}></div>
  );
};

export default TechHead;