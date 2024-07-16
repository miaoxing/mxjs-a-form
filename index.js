import { Form as AntdForm } from 'antd';


import Form from './Form';
import FormActions from './FormActions';
import FormItem from './FormItem';
import FormContext from './FormContext';
import SearchForm from './SearchForm';
import SearchItem from './SearchItem';
import Select from './Select';
import useForm from './useForm';
import ModalForm from './ModalForm';

const FormList = AntdForm.List;
const FormErrorList = AntdForm.ErrorList;
const FormAction = FormActions;

export {
  Form,
  FormItem,
  /**
   * @deprecated use FormActions instead
   */
  FormAction,
  FormActions,
  FormContext,
  SearchForm,
  SearchItem,
  Select,
  useForm,
  ModalForm,
  FormList,
  FormErrorList,
};
