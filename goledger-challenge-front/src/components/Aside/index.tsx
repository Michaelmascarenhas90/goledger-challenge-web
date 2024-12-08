import { useNavigate } from 'react-router'
import * as S from './styles'

const flows = [
  { name: 'Artistas', value: 'artistas', path: '/artistas' },
  { name: 'Playlists', value: 'playlists', path: '/playlists' }
]

const Aside = () => {
  const navigate = useNavigate()
  return (
    <S.Aside>
      <S.WrapperMenu>
        {flows.map(flow => <S.MenuItem style={{}} onClick={() => navigate(`${flow.path}`)}>{flow.name}</S.MenuItem>)}
      </S.WrapperMenu>
    </S.Aside>
  )
}

export default Aside;
