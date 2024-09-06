'use server'

export const fetchApiLogin = async ({
  username,
  password
}:{
  username : string,
  password : string
}) => {
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchApiGetLalin = async ({
 tanggal, 
 limit
}:{
 tanggal : string
 limit : number
}) => {
  const response = await fetch(`http://localhost:8080/api/lalins?tanggal=${tanggal}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchApiGetMasterGerbang = async ({
  body, 
  nama,
  page
 }:{
  body : string,
  nama : string,
  page : number
 }) => {
   const response = await fetch(`http://localhost:8080/api/gerbangs?limit=5?page=${page}`);
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
 
   return response.json();
 };

 export const fetchApiSearchMasterGerbang = async ({
  body, 
  nama
 }:{
  body : string,
  nama : string
 }) => {
   const response = await fetch(`http://localhost:8080/api/gerbangs?${nama}=${body}&limit=5`);
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
 
   return response.json();
 };


 export const fetchApiUpdateMasterGerbang = async ({
  id,
  IdCabang,
  NamaCabang,
  NamaGerbang,
}:{
  id: Number,
  IdCabang: Number,
  NamaCabang : string,
  NamaGerbang : string
}) => {
  const response = await fetch('http://localhost:8080/api/gerbangs', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      IdCabang: IdCabang,
      NamaCabang : NamaCabang,
      NamaGerbang : NamaGerbang
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchApiCreateMasterGerbang = async ({
  id,
  IdCabang,
  ruas,
  gerbang,
}:{
  id: Number,
  IdCabang: Number,
  ruas : string,
  gerbang : string
}) => {
  const response = await fetch('http://localhost:8080/api/gerbangs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      IdCabang: IdCabang,
      NamaCabang : ruas,
      NamaGerbang : gerbang
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};