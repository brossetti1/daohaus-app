import React from 'react';
import { useLocation, Link as RouterLink, useParams } from 'react-router-dom';
import { RiAddFill, RiInformationLine } from 'react-icons/ri';
import { Box, Flex, Button, Icon, Tooltip } from '@chakra-ui/react';
import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import { WrongNetworkToolTip } from '../components/wrongNetworkToolTip';
import { getCopy } from '../utils/metadata';
import UserAvatar from './userAvatar';
import { useOverlay } from '../contexts/OverlayContext';
import { supportedChains } from '../utils/chain';
import { capitalize } from '../utils/general';
import Web3SignIn from './web3SignIn';
import { useMetaData } from '../contexts/MetaDataContext';

const PageHeader = ({ isDao, header, headerEl, customTerms }) => {
  // const daoConnectedAndSameChain = () => {
  //   return address && dao?.chainID && injectedChain?.chainId === dao.chainID;
  // };
  // const location = useLocation();
  // const params = useParams();
  // const { injectedChain, address } = useInjectedProvider();

  return (
    <Flex direction='row' justify='space-between' p={6}>
      <Flex
        direction='row'
        justify={['space-between', null, null, 'flex-start']}
        align='center'
        w={['100%', null, null, 'auto']}
      >
        <Box
          fontSize={['lg', null, null, '3xl']}
          color='#ffffff'
          fontFamily='heading'
          fontWeight={700}
          mr={10}
        >
          {/* {dao ? getDaoHeading() : getHeading()} */}
          {customTerms ? getCopy(customTerms, header) : header}
        </Box>
        {/* {getHeaderElement()} */}
      </Flex>
      <Flex
        direction='row'
        justify='flex-end'
        align='center'
        d={['none', null, null, 'flex']}
      >
        {/* <WrongNetworkToolTip isDao={isDao} /> */}
        <Web3SignIn />
      </Flex>
    </Flex>
  );
};
export default PageHeader;
// const getTitle = () => {
//   if (location.pathname === "/") {
//     setPageTitle("Hub");
//   } else if (location.pathname === `/explore`) {
//     setPageTitle("Explore DAOs");
//   } else if (location.pathname === `/dao/${dao?.address}`) {
//     setPageTitle("Overview");
//   } else if (location.pathname === `/dao/${dao?.address}/proposals`) {
//     setPageTitle(theme.daoMeta.proposals);
//     // TODO proposals id regex
//   } else if (location.pathname === `/dao/${dao?.address}/proposals`) {
//     setPageTitle(theme.daoMeta.proposals);
//   } else if (
//     location.pathname === `/dao/${dao?.address}/proposals/new/member`
//   ) {
//     setPageTitle(
//       "New " + theme.daoMeta.member + " " + theme.daoMeta.proposal
//     );
//   } else if (location.pathname === `/dao/${dao?.address}/proposals/new`) {
//     setPageTitle(`New ${theme.daoMeta.proposal}`);
//   } else if (location.pathname === `/dao/${dao?.address}/members`) {
//     setPageTitle(theme.daoMeta.members);
//   } else if (location.pathname === `/dao/${dao?.address}/bank`) {
//     setPageTitle(theme.daoMeta.bank);
//   } else if (location.pathname === `/dao/${dao?.address}/settings`) {
//     setPageTitle("Settings");
//   } else if (location.pathname === `/dao/${dao?.address}/settings/meta`) {
//     setPageTitle("Metadata");
//   } else if (location.pathname === `/dao/${dao?.address}/settings/theme`) {
//     setPageTitle("Theme");
//   } else if (
//     location.pathname === `/dao/${dao?.address}/settings/notifications`
//   ) {
//     setPageTitle("Notifications");
//   } else if (location.pathname === `/dao/${dao?.address}/settings/boosts`) {
//     setPageTitle(theme.daoMeta.boosts);
//   } else if (
//     location.pathname === `/dao/${dao?.address}/settings/boosts/new`
//   ) {
//     setPageTitle("New " + theme.daoMeta.boost);
//   } else if (
//     location.pathname === `/themeSample` ||
//     location.pathname === `/theme`
//   ) {
//     setPageTitle("Theme Samples");
//   } else if (
//     location.pathname === `/dao/${dao?.address}/profile/${user?.username}`
//   ) {
//     setPageTitle(`${theme.daoMeta.member} Profile`);
//   } else {
//     // TODO pull from graph data
//     setPageTitle(dao?.apiMeta?.name);
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }
