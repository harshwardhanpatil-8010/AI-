"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoColorPallete from "./_components/LogoColorPallete";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";
import PricingModel from "./_components/PricingModel";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const totalSteps = 6;

  return (
    <div className="mt-20 p-8 max-w-4xl mx-auto">
      

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round((step / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="relative w-full bg-gray-200 h-2 rounded-full mt-2">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 border shadow-md rounded-xl bg-white">
        {step === 1 ? (
          <LogoTitle
            onHandleInputChange={(v) => onHandleInputChange("title", v)}
            formData={formData}
          />
        ) : step === 2 ? (
          <LogoDesc
            onHandleInputChange={(v) => onHandleInputChange("desc", v)}
            formData={formData}
          />
        ) : step === 3 ? (
          <LogoColorPallete
            onHandleInputChange={(v) => onHandleInputChange("palette", v)}
            formData={formData}
          />
        ) : step === 4 ? (
          <LogoDesigns
            onHandleInputChange={(v) => onHandleInputChange("design", v)}
            formData={formData}
          />
        ) : step === 5 ? (
          <LogoIdea
            onHandleInputChange={(v) => onHandleInputChange("idea", v)}
            formData={formData}
          />
        ) : step === 6 ? (
          <PricingModel
            onHandleInputChange={(v) => onHandleInputChange("pricing", v)}
            formData={formData}
          />
        ) : null}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-6">
        {step > 1 && (
          <Button
            onClick={() => setStep(step - 1)}
            variant="outline"
            className="flex items-center"
          >
            <ArrowLeft className="mr-2" /> Previous
          </Button>
        )}
        {step < totalSteps ? (
          <Button
            onClick={() => setStep(step + 1)}
            className="flex items-center"
          >
            Continue <ArrowRight className="ml-2" />
          </Button>
        ) : (
          <Button
            onClick={() => alert("All steps completed!")}
            className="flex items-center bg-green-500 hover:bg-green-600"
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}

export default CreateLogo;
