"use client";
import React from "react";

export interface PatientTransferProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const PatientTransfer = (props: PatientTransferProps) => {
  return (
      <div {...props}>
        <div className="basis-1/4" suppressHydrationWarning>
          <label suppressHydrationWarning>Two:</label>
          <input
            type="password"
            placeholder="Import "
            suppressHydrationWarning
          />
        </div>
      </div>
  );
};
