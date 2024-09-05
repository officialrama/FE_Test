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
 }:{
  body : {}
 }) => {
   const response = await fetch(`http://localhost:8080/api/gerbangs?${body}`);
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
    method: 'PUT',
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