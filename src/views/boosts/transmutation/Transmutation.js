import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_MEMBER } from '../../../utils/Queries';
import ErrorMessage from '../../../components/shared/ErrorMessage';
import Loading from '../../../components/shared/Loading';
import TransmutationForm from '../../../components/proposal-v2/TransmutationForm';
import { DaoDataContext } from '../../../contexts/Store';

const Transmutation = (props) => {
  const [daoData] = useContext(DaoDataContext);
  // const options = {
  //   client: "",
  //   variables: { molochAddress: daoData.contractAddress }
  // }
  // const { loading, error, data } = useQuery(GET_MEMBER, {
  //   variables: { id: props.match.params.id },
  // });

  // if (loading) return <Loading />;
  // if (error) return <ErrorMessage message={error} />;

  //todo: load the service and pass it down

  return <TransmutationForm />;
};

export default Transmutation;
