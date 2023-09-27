'use client'
import { Heading, Flex, IconButton, Button, Link, Box } from "@radix-ui/themes"
import { GitHubLogoIcon, SunIcon, MoonIcon, Cross1Icon } from "@radix-ui/react-icons"

export default function NavContent({toggleTheme, darkTheme, showHeading, mounted, setOpen}: {toggleTheme: () => void, darkTheme: boolean, showHeading: boolean, mounted: boolean, setOpen: (prev: any) => void}) {
    return (
        <Flex direction="column" align="baseline" justify="between" grow="1" shrink="0">
            { showHeading ? 
            <Heading size="7" style={{
            fontWeight: 600,
            letterSpacing: "var(--letter-spacing-9)",
            }}>Doodles</Heading> : <Flex direction="row" align="center" justify="between" width="100%" style={{background: "var(--gray-1)"}}>
            <Heading size="7" style={{
                fontWeight: 600,
                letterSpacing: "var(--letter-spacing-9)",
            }}>Doodles</Heading>
            <IconButton variant="ghost" size="4" color="gray" style={{
                    color: "var(--gray-12)"
                }} onClick={() => {setOpen((prev: any) => !prev)}}>
                    <Cross1Icon width="24" height="24" />
            </IconButton>
        </Flex> } 
            <Flex direction="column" align="baseline" justify="center" gap="2">
                <Link href={"/"} >
                    <Button variant="ghost" size="3" color="gray" style={{
                        color: "var(--gray-12)"
                    }}>
                        <Heading size="6" weight="medium">Get Now</Heading>    
                    </Button>
                </Link>
                <Link href={"/"} >
                    <Button variant="ghost" size="3" color="gray" style={{
                        color: "var(--gray-12)"
                    }}>
                        <Heading size="6" weight="medium">Login</Heading>    
                    </Button>
                </Link>
                <Link href={"/"} >
                    <Button variant="ghost" size="3" color="gray" style={{
                        color: "var(--gray-12)"
                    }}>
                        <Heading size="6" weight="medium">Doodle Hunt</Heading>    
                    </Button>
                </Link>
                <Link href={"/"} >
                    <Button variant="ghost" size="3" color="gray" style={{
                        color: "var(--gray-12)"
                    }}>
                        <Heading size="6" weight="medium">Leaderboard</Heading>    
                    </Button>
                </Link>
            </Flex>
            <Flex direction="row" align="baseline" justify="start" width="100%" gap="6">
                <IconButton variant="ghost" size="4" color="gray" style={{
                    color: "var(--gray-12)"
                }}>
                    <GitHubLogoIcon width="24" height="24" />
                </IconButton>
                <IconButton variant="ghost" size="4" color="gray" style={{
                    color: "var(--gray-12)"
                }}>
                    <GitHubLogoIcon width="24" height="24" />
                </IconButton>
                { mounted ? <IconButton variant="ghost" size="4" color="gray" style={{
                    color: "var(--gray-12)"
                }} onClick={toggleTheme}>
                    {darkTheme ? <SunIcon width="24" height="24" /> : <MoonIcon width="24" height="24" />}
                </IconButton> : null }
            </Flex>
        </Flex>
    )
}