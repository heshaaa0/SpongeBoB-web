import React from "react";

const FlexText = () => {
  return (
    <div className="md:px-14 lg:px-40"> 
      <h1 className="text-center text-4xl items-center capitalize">How Our Solution Benefits<br/>Your Business</h1>
      <div className="flex md:flex-row p-5">
        <div className="grid grid-cols-1 md:pr-10 lg:pr-0 lg:w-2/4">
          <div className="py-5">
            <p className="pb-6 text-sm">Real-Time Data</p>
            <p className="text-xl">Real-Time Data Insights for<br/>Enhanced Decision-Making</p>
          </div>
          <div className="py-5">
            <p className="pb-6 text-sm">Real-Time Data</p>
            <p className="text-xl">Real-Time Data Insights for<br/>Enhanced Decision-Making</p>
          </div>
          <div className="py-5">
            <p className="pb-6 text-sm">Real-Time Data</p>
            <p className="text-xl">Real-Time Data Insights for<br/>Enhanced Decision-Making</p>
          </div>
          <div className="py-5">
            <p className="pb-6 text-sm">Real-Time Data</p>
            <p className="text-xl">Real-Time Data Insights for<br/>Enhanced Decision-Making</p>
          </div>
        </div>
        <div className="grid grid-cols-1 text-justify items-center w-3/4">
          <div className="py-10 mt-10">
            <p>Incorporating real-time data into your ERP system offers a wealth of benefits that can significantly impact your business operations. Here's a closer look at how real-time data can revolutionize decision-making and overall business performance</p>
          </div>
          <div className="py-10 mt-10">
            <p>Incorporating real-time data into your ERP system offers a wealth of benefits that can significantly impact your business operations. Here's a closer look at how real-time data can revolutionize decision-making and overall business performance</p>
          </div>
          <div className="py-10 mt-10">
            <p>Incorporating real-time data into your ERP system offers a wealth of benefits that can significantly impact your business operations. Here's a closer look at how real-time data can revolutionize decision-making and overall business performance</p>
          </div>
          <div className="py-10 mt-10">
            <p>Incorporating real-time data into your ERP system offers a wealth of benefits that can significantly impact your business operations. Here's a closer look at how real-time data can revolutionize decision-making and overall business performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexText;
