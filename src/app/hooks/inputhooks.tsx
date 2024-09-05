
import * as React from 'react';

interface LoginForm {
  username: string;
  password: string;
  
}

interface MasterGerbangForm {
    ruas: string;
    gerbang: string;
    id: number;
    IdCabang: number;
  }

export const useHooksJasaMarga = () => {
  const [input, setInput] = React.useState<LoginForm>({
    username: '',
    password: '',
  });

  const [masterForm, setMasterForm] = React.useState<MasterGerbangForm>({
    ruas: '',
    gerbang: '',
    id: 0,
    IdCabang: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  const [masterGerbangFilter, setMasterGerbangFilter] = React.useState({})

  const [tanggalLalin, setTanggalLalin] = React.useState('')

  const handleFilterTanggal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTanggalLalin(value);
  }

  return { input, handleChange, tanggalLalin, handleFilterTanggal, masterGerbangFilter, setMasterGerbangFilter, masterForm, setMasterForm };
};
