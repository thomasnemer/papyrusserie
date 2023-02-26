import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import DescriptionIcon from '@mui/icons-material/Description'
import ExplicitIcon from '@mui/icons-material/Explicit'
import BarChartIcon from '@mui/icons-material/BarChart'
import FactoryIcon from '@mui/icons-material/Factory'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Contracts from './Contracts'
import Infos from './Infos'
import Stats from './Stats'
import Employers from './Employers'
import Settings from './Settings'

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box>
            {children}
          </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default function Main () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
      <div>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="Menu">
          <Tab icon={<DescriptionIcon />} label="Contrats" {...a11yProps(0)}/>
          <Tab icon={<ExplicitIcon />} label="Pôle-Emploi" {...a11yProps(1)}/>
          <Tab icon={<BarChartIcon />} label="Statistiques" {...a11yProps(2)}/>
          <Tab icon={<FactoryIcon />} label="Employeurs" {...a11yProps(3)}/>
          <Tab icon={<SettingsIcon />} label="Réglages" {...a11yProps(4)}/>
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
            <Box sx={{ width: '100%' }}>
                <Contracts/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{ width: '100%' }}>
                <Infos/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Box sx={{ width: '100%' }}>
                <Stats/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Box sx={{ width: '100%' }}>
                <Employers/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Box sx={{ width: '100%' }}>
                <Settings/>
            </Box>
        </TabPanel>
      </div>
      </div>
  )
}
