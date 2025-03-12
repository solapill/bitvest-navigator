
import React from 'react';
import { Check, X } from 'lucide-react';

interface ValidationRuleProps {
  text: string;
  isValid: boolean;
  isTouched: boolean;
}

const ValidationRule: React.FC<ValidationRuleProps> = ({ text, isValid, isTouched }) => {
  let Icon = Check;
  let className = 'validation-rule rule-neutral';
  
  if (isTouched) {
    Icon = isValid ? Check : X;
    className = `validation-rule ${isValid ? 'rule-valid' : 'rule-invalid'}`;
  }

  return (
    <div className={className}>
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
};

export default ValidationRule;
