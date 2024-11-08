import React from 'react';

const Card = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

const CardHeader = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  );
});

const CardTitle = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
});

const CardDescription = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    />
  );
});

const CardContent = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  );
});

const CardFooter = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    />
  );
});

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };