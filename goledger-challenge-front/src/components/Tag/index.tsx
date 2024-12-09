import * as S from './styles'

type TagProps = {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <S.Tag>{children}</S.Tag>
  )
}

export default Tag;
