'use client'
import { Box, Heading, AlertDialog, IconButton, Flex } from "@radix-ui/themes"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import NavContent from "./NavContent";

export default function Navbar() {
    const { setTheme } = useTheme()
    const [ mounted, setMounted ] = React.useState<boolean>(false)
    const [ darkTheme, setDarkTheme ] = React.useState<boolean>(false)
    const [ open, setOpen ] = React.useState<boolean>(false)
    const toggleTheme = () => {
        setDarkTheme((prev) => !prev)
        setTheme(darkTheme ? "dark" : "light")
    }

    useEffect(() => {
        setMounted(true)
        const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkTheme(isDarkTheme);
        setTheme(darkTheme ? "dark" : "light");
    }, [])

    return (
     <>
        <Flex display={{
            initial: 'flex',
            md: 'none'
        }} width="100%" position="fixed" style={{zIndex:1}} id="header">
            <Flex direction="row" align="center" justify="between" py="6" px="6" width="100%" style={{background: "var(--gray-1)"}}>
                    <Heading size="7" style={{
                        fontWeight: 600,
                        letterSpacing: "var(--letter-spacing-9)",
                    }}>Doodles</Heading>
                    <IconButton variant="ghost" size="4" color="gray" style={{
                        color: "var(--gray-12)"
                    }} onClick={() => {setOpen((prev) => !prev)}} >
                        <HamburgerMenuIcon width="24" height="24" />
                    </IconButton>
            </Flex>

            {open ? <Flex px="6" py="6" direction="column" style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                zIndex: "5",
                background: "var(--gray-1)",
            }}>
                <NavContent toggleTheme={toggleTheme} darkTheme={darkTheme} showHeading={false} mounted={mounted} setOpen={setOpen}/>
            </Flex> : null}   
        </Flex>
        <Flex display={{
            initial: 'none',
            md: 'flex',
        }} style={{width:"32%", position: "fixed", left: 0}} px="9" py="9" direction="column" className="nav-col" height="100%">
            <NavContent toggleTheme={toggleTheme} darkTheme={darkTheme} showHeading={true} mounted={mounted} setOpen={setOpen}/>
        </Flex>
     </>
    )
}