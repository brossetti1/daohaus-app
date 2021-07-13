import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Flex, useToast } from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import BalanceList from '../components/balanceList';
import BankChart from '../components/bankChart';
import MainViewLayout from '../components/mainViewLayout';
import { daoConnectedAndSameChain } from '../utils/general';
import { VAULT } from '../data/vaults';

const Treasury = ({
  overview,
  customTerms,
  currentDaoTokens,
  daoMember,
  delegate,
  daoVaults,
}) => {
  const { daoid, daochain } = useParams();
  const { address, injectedChain } = useInjectedProvider();
  const toast = useToast();
  const [needsSync, setNeedsSync] = useState(false);

  const treasuryVaultData = daoVaults?.find(vault => vault.type === 'treasury');
  const vaultConfig = VAULT.TREASURY;

  const handleCopy = () => {
    toast({
      title: 'Treasury Address Copied',
      position: 'top-right',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const ctaButton = (
    <Flex>
      <CopyToClipboard text={daoid} mr={2} onCopy={handleCopy}>
        <Button>Copy Address</Button>
      </CopyToClipboard>
      {daoConnectedAndSameChain(address, injectedChain?.chainId, daochain) &&
        daoMember && (
          <Button
            as={Link}
            to={`/dao/${daochain}/${daoid}/proposals/new/whitelist`}
            rightIcon={<RiAddFill />}
          >
            Whitelist Asset
          </Button>
        )}
    </Flex>
  );

  useEffect(() => {
    const canSync = daoMember?.exists || delegate;
    if (currentDaoTokens && canSync) {
      console.log('currentDaoTokens', currentDaoTokens);
      setNeedsSync(
        currentDaoTokens.some(token => {
          return (
            token.contractBalances &&
            token.contractBalances.token !== token.contractBalances.babe
          );
        }),
      );
    }
  }, [currentDaoTokens, daoMember, delegate]);

  return (
    <MainViewLayout
      header='Treasury'
      customTerms={customTerms}
      headerEl={ctaButton}
      isDao
    >
      <BankChart
        overview={overview}
        customTerms={customTerms}
        daoVaults={daoVaults}
        balanceData={treasuryVaultData?.balanceHistory}
        visibleVaults={[treasuryVaultData]}
      />
      <BalanceList
        vaultConfig={vaultConfig}
        balances={currentDaoTokens}
        needsSync={needsSync}
      />
    </MainViewLayout>
  );
};

export default Treasury;
