import React from 'react';
import { useParams } from 'react-router-dom';
import FollowCursor from '../hooks/follow';
import DataDisplayer from '../hooks/raceCondition';

const UserComponent: React.FC<any> = (props: any) => {
  console.log(props);
    const params = useParams();
  const { id } = params;

  return (<>
    <div>
      <h2>User ID: {id}</h2>
      {/* Additional user-specific content */}
    </div>
    <FollowCursor>
      <div>Follow Me</div>
    </FollowCursor>
    <DataDisplayer id={1} />
    </>
  );
};

export default UserComponent;