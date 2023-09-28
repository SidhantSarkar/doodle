'use client'
import { Box, Button, Card, Flex, Grid, Heading, Slot, Text } from '@radix-ui/themes';
import Masonry from 'react-masonry-css'
import NoteSvg from './components/svgs/note';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import CrownSvg from './components/svgs/crown';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import anime from 'animejs';
import gif from '../../public/record.gif';
import doodleToolsImg from '../../public/doodle-tools.png';
import Image from 'next/image';
import { DoodleSvg } from './components/DoodleSvg';

export default function Home() {
  const router = useSearchParams();
  const closeOnSuccess = router.get('closeOnSuccess');

  const [runAnimation, setRunAnimation] = React.useState(false);
  const [navHeight, setNavHeight] = React.useState(0);
  const toolsRef = React.useRef(null);

  const animation = () => {
    anime({
      targets: '.logo-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 10000,
      easing: 'linear',
      loop: true,
    });
  }

  React.useEffect(() => {
    const header = document.getElementById('header');
    if (header) setNavHeight(header.clientHeight);

    setRunAnimation(true);
    animation();

    const resizeHandler = () => {
      const header = document.getElementById('header');
      if (header) setNavHeight(header.clientHeight);
    }
   
    const interval = setInterval(() => {
      setRunAnimation(false);
      setTimeout(() => {
        setRunAnimation(true);
      }, 1000);
    }, 10000);

    window.addEventListener('resize', resizeHandler, false)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeHandler, false)
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
      <Flex direction="column" style={{
        marginTop: `${navHeight}px`,
        height: `calc(100vh - ${navHeight}px)`,
        width: '100%',
      }} gap={{
        initial: '9',
        md: '5'
      }} justify={{
        initial: 'center',
        md: 'start'
      }}>
        <Flex direction="column" justify="start" width="100%" gap={{
          initial: '5',
          md: '8'
        }}>
        <RoughNotationGroup show={runAnimation}>
          <Heading size={{
            initial: '6',
            sm: '8'
          }} color="gray" >Scratch <RoughNotation type='underline' color={"var(--tomato-9)"} strokeWidth={4} iterations={5}>the web.</RoughNotation></Heading>
          <Heading size={{
            initial: '6',
            sm: '8'
          }} color="gray" >Scribble <RoughNotation type='box' strokeWidth={4} color={"var(--amber-9)"} iterations={5}>your ideas</RoughNotation> anywhere.</Heading>
          <Heading size={{
            initial: '6',
            sm: '8'
          }} color="gray" >Spot all <RoughNotation type='bracket' strokeWidth={4} color={"var(--plum-9)"} iterations={5} brackets={['left', 'right']} padding={4}>the creations</RoughNotation> of the world.</Heading>
          <Heading size={{
            initial: '8',
            sm: '9'
          }} className='display-on-hover' style={{
            width: 'fit-content',
          }}>Start <RoughNotation type='highlight' strokeWidth={4} color={"var(--sky-6)"} iterations={5}>Doodling !</RoughNotation></Heading>
          
        </RoughNotationGroup>
        </Flex>
        <Flex width="100%" justify="end">
          <Box style={{
            width: '50%',
          }} id='my-crown'>
            <CrownSvg stroke="var(--orange-9)" strokeWidth="1" fill="transparent"/>
          </Box>  
        </Flex>
      </Flex>

      <Flex direction="column" gap="9" mb="4">
        <Flex direction="column" gap="2">
          <Heading size="8">With Doodle extension the entire web is your canvas.</Heading>
          <Text size="5" weight="bold" color="gray">Scribble your thoughts, add notes, and share with the world.</Text>
        </Flex>
        <Box width="100%" style={{
          borderRadius: "var(--radius-5)",
          minWidth: "600px",
        }}>
          <Image src={gif} alt="Doodle demo" style={{
            height: "auto",
            width: "100%",
            borderRadius: "var(--radius-5)",
          }} className="shadow-lg"/>
        </Box>
      </Flex>

      <Flex direction="column" gap="9" mt="9"> 
        <Flex direction="column" gap="2">
          <Heading size="8">You are only bound by your imagination.</Heading>
          <Text size="5" weight="bold" color="gray">Doodle offers multiple tools to choose from. </Text>
        </Flex>   
        <Grid columns={{
          initial: "1",
          md: "2"
        }} gap="6">
          <Card variant="surface" style={{
            background: 'var(--plum-3)'
          }}>
            <Flex direction="column" gap="4" width="100%">
              <Flex direction="column" width="100%" gap="8">
                <DoodleSvg svgName="hurricane" color="plum" fill={true} height="4rem" width="4rem"/>
                <Flex direction="column" gap="4">
                  <Heading size="6">Thinking out loud.</Heading>
                  <Text size="4" weight="medium">Toogle the extension and start giving the page a personal touch. Draw, squiggle, connect your thoughts using the toolbar.</Text>
                </Flex>
                <Box style={{
                  height: `${(toolsRef?.current as any)?.clientHeight / 2}px`,
                }}></Box>
                <Box style={{
                  width: '32rem',
                  alignSelf: 'center',
                  position: 'absolute',
                  bottom: "-0.4rem",
                }} ref={toolsRef}>
                  <Image src={doodleToolsImg} alt='Doodle tool showcase' style={{
                      height: "auto",
                      width: "100%",
                    }} 
                  />
                </Box>
              </Flex>
            </Flex>
          </Card>

          <Card variant="surface" style={{
            background: 'var(--amber-3)'
          }}>
            <Flex direction="column" gap="4" width="100%">
              <Flex direction="column" width="100%" gap="8">
                <DoodleSvg svgName="love" color="amber" fill={true} height="4rem" width="4rem"/>
                <Flex direction="column" gap="4">
                  <Heading size="6">Pretty pretty notes.</Heading>
                  <Text size="4" weight="medium">Toogle the extension and start giving the page a personal touch. Draw, squiggle, connect your thoughts using the toolbar.</Text>
                </Flex>
                <Box style={{
                  height: '16rem',
                  width: '16rem',
                  maxHeight: "220px",
                  maxWidth: "220px",
                  alignSelf: 'center'
                }} className="shadow-lg bounding-box">
                  <NoteSvg />
                </Box>
              </Flex>
            </Flex>
          </Card>
        </Grid>    
        
        
      </Flex>
      

      
        
    </>
  )
}
