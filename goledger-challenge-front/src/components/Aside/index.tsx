import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Tag from '../Tag'
import { getSchemas } from '../../services/getSchema'
import type { GetSchemaResponse } from '../../services/getSchema'
import * as S from './styles'

const flows = [
  { name: 'Artistas', value: 'artistas', path: '/artistas' },
  { name: 'Playlists', value: 'playlists', path: '/playlists' }
]

const Aside = () => {
  const [schemas, setSchemas] = useState<GetSchemaResponse[]>()
  const navigate = useNavigate()

  const getSchemasRequest = useCallback(async () => {
    try {
      const response = await getSchemas()
      setSchemas(response)
    } catch (error) {
      console.error(`request getSchemasRequest: ${error}`)
    }
  }, [])

  useEffect(() => {
    getSchemasRequest()
  }, [getSchemasRequest])

  console.log('resposta dos schemas: ', schemas)

  return (
    <S.Aside>
      {schemas && (
        <S.HeaderAside>
          {schemas?.map(schema => <Tag>{schema.label}</Tag>)}
        </S.HeaderAside>
      )}

      <S.WrapperMenu>
        {flows.map(flow => <S.MenuItem style={{}} onClick={() => navigate(`${flow.path}`)}>{flow.name}</S.MenuItem>)}
      </S.WrapperMenu>
    </S.Aside>
  )
}

export default Aside;
