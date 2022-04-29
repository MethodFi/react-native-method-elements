import * as React from 'react';
import axios from 'axios';
import RNMethodElements from './components/RNMethodElements';

export default function App() {
  const [token, setToken] = React.useState('ent_mcatmBMxgUAzc');
  const [elementToken, setElementToken] = React.useState(null);

  React.useEffect(async () => {
    const url = `https://dev.methodfi.com/elements/token`;
    try {
      const response = await axios.post(url, { 
        type: 'link',
        entity_id: token,
        link: {}
      },{
        headers: {
        'Authorization': `Bearer sk_Tiidxf4Br4mwHqARmQK7Dscs`
        }
      })
      if (response.status === 200) {
        setElementToken(response.data.data.element_token);
        return;
      } else {
        throw new Error("Failed to fetch elem token");
      }
    } catch (error) {
      console.log(error);
    };
  }, []);

  if (token) {
    return (
      <RNMethodElements
        env='dev'
        onOpen={() => {}}
        onSuccess={() => {}}
        onEvent={() => {}}
        onExit={() => {}}
        onError={() => {}}
        token={elementToken}
      />
    )
  }
}
