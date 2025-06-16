import FontAwesome from '@expo/vector-icons/FontAwesome'

type Props = {
  onPress: () => void
}
export default function Hamburger({ onPress }: Props) {
  return (
    <FontAwesome name='bars' size={34} onPress={onPress} color='orange' />
  )
}
