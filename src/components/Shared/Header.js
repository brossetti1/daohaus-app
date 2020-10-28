import React, { useEffect, useState } from 'react';
import { Text, Flex, Link, Spinner } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import {
  useUser,
  useNetwork,
  useDao,
  useLoading,
} from '../../contexts/PokemolContext';
import { Web3SignIn } from './Web3SignIn';
import UserAvatar from './UserAvatar';

const Header = () => {
  const location = useLocation();
  const [user] = useUser();
  const [network] = useNetwork();
  const [dao] = useDao();
  const [loading] = useLoading();
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    if (location.pathname === '/') {
      setPageTitle('Hub');
    } else {
      // TODO pull from graph data
      setPageTitle(dao?.graphData?.title);
    }
    // eslint-disable-next-line
  }, [location, dao]);

  return (
    <Flex direction='row' justify='space-between' p={6}>
      <Flex direction='row' justify='flex-start'>
        <Text fontSize='3xl'>{pageTitle}</Text>

        {user ? (
          <Link href='https://3box.io/hub' isExternal>
            Edit Profile on 3Box
          </Link>
        ) : null}
      </Flex>

      <Flex direction='row' justify='flex-end' align='center'>
        {loading && <Spinner mr={5} />}
        <Text fontSize='m' mr={5}>
          {network.network}
        </Text>

        {user ? <UserAvatar user={user} /> : <Web3SignIn />}
      </Flex>
    </Flex>
  );
};
export default Header;
