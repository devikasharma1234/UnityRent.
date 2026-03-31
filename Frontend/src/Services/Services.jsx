// // ServicesList.jsx
// import React, { useState, useEffect } from 'react';
// import ServiceCard from '../Landing_Page/Home/ServiceCard';

// const ServicesList = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         // Adjust this URL to match your backend route
//         const response = await fetch('http://localhost:8080/services');
//         const data = await response.json();
        
//         // If your API returns an object like { success: true, data: [...] }
//         // use setServices(data.data);
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) return <div className="text-center p-10">Loading awesome services...</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Available Services</h1>
      
//       {services.length === 0 ? (
//         <p>No services found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map(service => (
//             <ServiceCard key={service._id} service={service} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesList;