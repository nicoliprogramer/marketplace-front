import {AccessDenied} from '../../pages/accessDenied'

interface Props {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const auth = localStorage.getItem("token")

  if(auth) {
    return (<RouteComponent/>)
  }
    
  if(!auth) {
    return <AccessDenied/>
  }
}