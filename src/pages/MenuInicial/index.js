//cSpell:Ignore Cabecalho
import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import PersonPinIcon from '@material-ui/icons/PersonPin'
import HelpIcon from '@material-ui/icons/Help'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import Cabecalho from '../Cabecalho'
import Tarefas from '../Tarefas'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {/* Remover o Typography do Exemplo */}
                    {children}
                </Box>

            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Cabecalho />
            <AppBar position="static" color="secondary">
                <Tabs value={value} onChange={handleChange} centered aria-label="Opções do Menu">
                    <Tab label="Tarefas" icon={<LocalOfferIcon />} {...a11yProps(0)} />
                    <Tab label="Usuários" icon={<PersonPinIcon />} {...a11yProps(1)} />
                    <Tab label="Clientes" icon={<AccessibilityIcon />} {...a11yProps(2)} />
                    <Tab label="Ajuda" icon={<HelpIcon />} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Tarefas />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Usuários
            </TabPanel>
            <TabPanel value={value} index={2}>
                Clientes
            </TabPanel>
            <TabPanel value={value} index={3}>
                Ajuda
            </TabPanel>
        </div>
    );
}
