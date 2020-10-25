import React, { useState } from 'react';
import './App.css';
import { Menu } from '../components/Menu/Menu';
import { Rank } from '../components/Rank/Rank';
import { ResultImage } from '../components/ResultImage/ResultImage';
import { ImgLinkForm } from '../components/ImgLinkForm/ImgLinkForm';
import Particles from 'react-particles-js';
import { Card } from '../components/Card/Card';
import particelsOpt from '../particleOpts.json';
import { SignInContainer } from './SignInContainer';
import { RegisterContainer } from './RegisterContainer';

const App = () => {
  // State
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({ name: '', count: 0 });
  // End of state

  // Functions
  const loadUserData = (data) => {
    setUser({ ...data });
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onPictureSubmit = () => {
    setImageUrl(input);
    setInput('');
    fetch('http://localhost:3030/imageapi', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result !== 'error working with api') {
          fetch('http://localhost:3030/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: user.name,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              setUser({ ...user, count: result.count });
            })
            .catch(console.log);
          setBox(calculateFaceBox(result.data));
        }
      })
      .catch((err) => {
        console.log('error with api', err);
      });
  };

  const calculateFaceBox = (data) => {
    const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#recogimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      topRow: boundingBox.top_row * height,
      leftCol: boundingBox.left_col * width,
      bottomRow: height - boundingBox.bottom_row * height,
      rightCol: width - boundingBox.right_col * width,
    };
  };
  const onRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setInput('');
    setImageUrl('');
    setBox({});
    setRoute('signin');
    setIsSignedIn(false);
    setUser({ name: '', count: 0 });
  };
  // End of functions

  // Render
  return (
    <>
      <Particles className='particles' params={particelsOpt} />
      <Menu onRouteChange={onRouteChange} isSignedIn={isSignedIn} signOut={signOut} />
      <div className='flexWrapper'>
        {route === 'signin' ? (
          <Card>
            <SignInContainer
              onRouteChange={onRouteChange}
              signIn={signIn}
              loadUser={loadUserData}
            />
          </Card>
        ) : route === 'register' ? (
          <Card>
            <RegisterContainer onRouteChange={onRouteChange} />
          </Card>
        ) : (
          <>
            <Rank user={user} />
            <Card>
              <ImgLinkForm
                input={input}
                onInputChange={onInputChange}
                onPictureSubmit={onPictureSubmit}
              />
            </Card>
            <ResultImage imageUrl={imageUrl} box={box} />
          </>
        )}
      </div>
    </>
  );
};
export default App;
