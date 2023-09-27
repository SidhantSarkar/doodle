'use client'
import { Box, Button, Flex, Grid, Heading, Inset, Text } from '@radix-ui/themes';
import Masonry from 'react-masonry-css'
import NoteSvg from './components/svgs/note';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import CrownSvg from './components/svgs/crown';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [isMounted, setIsMounted] = React.useState(false);
  const [runAnimation, setRunAnimation] = React.useState(false);
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
  };

  const router = useSearchParams();
  const closeOnSuccess = router.get('closeOnSuccess');

  React.useEffect(() => {
    setIsMounted(true);
    setRunAnimation(true);
   
    const interval = setInterval(() => {
      setRunAnimation(false);
      setTimeout(() => {
        setRunAnimation(true);
      }, 1000);
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    if (closeOnSuccess === 'true') window.close();
  }, [closeOnSuccess]);

  return (
    <>
      {/* <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <div style={{
          height: '100px',
        }}>My Element</div>
        <div style={{
          height: '80px',
        }}>My Element</div>
        <div style={{
          height: '150px',
        }}>My Element</div>
        <div style={{
          height: '80px',
        }}>My Element</div>
        <div style={{
          height: '120px',
        }}>My Element</div>
      </Masonry> */}
      <Flex direction="column" justify={{
        initial: 'center',
        md: 'start'
      }} style={{
        height: '100vh',
        width: '100%'
      }} gap={{
        initial: '5',
        md: '8'
      }}>
      <RoughNotationGroup show={runAnimation}>
        <Heading size={{
          initial: '5',
          sm: '8'
        }}>Scratch <RoughNotation type='underline' color={"var(--tomato-9)"} strokeWidth={4} iterations={5}>the web.</RoughNotation></Heading>
        <Heading size={{
          initial: '5',
          sm: '8'
        }}>Scribble <RoughNotation type='box' strokeWidth={4} color={"var(--amber-9)"} iterations={5}>your ideas</RoughNotation> anywhere.</Heading>
        <Heading size={{
          initial: '5',
          sm: '8'
        }}>Spot all <RoughNotation type='bracket' strokeWidth={4} color={"var(--plum-9)"} iterations={5} brackets={['left', 'right']} padding={4}>the creations</RoughNotation> of the world.</Heading>
        <Heading size={{
          initial: '6',
          sm: '9'
        }}>Start <RoughNotation type='highlight' strokeWidth={4} color={"var(--sky-6)"} iterations={5}>Doodling!</RoughNotation></Heading>
      </RoughNotationGroup>
      </Flex>
      

      <Box position="absolute" style={{
          bottom: '1rem',
          right: '2rem',
          rotate: '5deg',
          width: '25%',
          background: "#f0c575"
        }} className='shadow-lg' id='my-note'>
          <NoteSvg />
        </Box>

      <Box position="absolute" style={{
        top: '6rem',
        right: '2rem',
        width: '35%',
      }} id='my-crown'>
        <CrownSvg stroke="var(--orange-9)" strokeWidth="1"/>
      </Box>  
        
    </>
  )
}
