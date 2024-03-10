
import { colors } from "@/styles/colors"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 w-full bg-blue-500 items-center justify-center rounded-sm"
      style={styles.button}
      {...rest}
    >
      <Text className="text-white text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    backgroundColor: colors.blue[500],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2

  }
})