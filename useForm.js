import React, {useContext} from 'react';
import FormContext from './FormContext';

export default function useForm() {
  return useContext(FormContext);
}
