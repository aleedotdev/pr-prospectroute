 /* eslint-disable */
import { ChangeEvent } from "react";

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


export interface InputFieldProps {
  disabled?: boolean;
  label?: string;
  name?: string;
  icon?: string;
  value?: string | number;
  codeValue?: string;
  onCodeChange?: (value: string) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onFocus?: any;
  onBlur?: any;
  styling?: string;
  labelStyles?: string;
  textColor?: string;
  [key: string]: any;
  maxLength?: number;
  isAuth?: boolean;
}

export interface FormValues {
  firstName: string;
  email: string;
  mobile: string;
  agencyEmployees: string;
}


export interface PricingFeature {
  label: string;
  value: string | number;
  emphasized?: boolean;
}

export interface PricingCardProps {
  callsRange: string;
  features: PricingFeature[];
  price: number;
  featured?: boolean;
}