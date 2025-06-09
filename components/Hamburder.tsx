import FontAwesome from '@expo/vector-icons/FontAwesome'

type Props = {
  onPress: () => void
}
export default function Hamburger({ onPress }: Props) {
  return (
    <FontAwesome name='bars' size={24} onPress={onPress} color='yellow' />
  )
}
