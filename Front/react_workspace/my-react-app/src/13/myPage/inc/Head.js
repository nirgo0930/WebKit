import { Link, Tab, Tabs } from "@mui/material";


function Head() {



    return (
        <>
            <Tabs>
                <Tab label="Home" href="/" />
                <Tab label="About Me" href="/AboutMe" />
                <Tab label="Comment" href="/Comment" />
            </Tabs>


        </>
    );
}

export default Head;