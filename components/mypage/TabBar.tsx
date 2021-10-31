import React, { useState } from "react";
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Info from "./Info";
import Subscribe from "./Subscribe";
import Shopping from "./Shopping";
import PaymentHistory from "./PaymentHistory";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
}));


function TabBar({currtab}:any) {

    const classes = useStyles();
    const [value, setValue] = useState(currtab);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        // setValue(newValue);
        window.location.replace('/mypage?currtab='+newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color='white'>
                <Tabs value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="wrapped label tabs example">
                    <Tab
                        value="info"
                        label="내 정보"
                        {...a11yProps('info')}
                    />
                    <Tab value="subscribe" label="내 구독" {...a11yProps('subscribe')} />
                    <Tab value="shopping" label="장바구니" {...a11yProps('shopping')} />
                    <Tab value="payhis" label="결제 이력" {...a11yProps('payhis')} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index="info">
                <Info/>
            </TabPanel>
            <TabPanel value={value} index="subscribe">
                <Subscribe/>
            </TabPanel>
            <TabPanel value={value} index="shopping">
                <Shopping />
            </TabPanel>
            <TabPanel value={value} index="payhis">
                <PaymentHistory />
            </TabPanel>
        </div>
    )
}

export default TabBar;