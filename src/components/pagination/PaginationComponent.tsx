import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";

type Props = {
  currentPage: number;
  lastPage: number;
  setPageIndex: (page: number) => void;
};

export const PaginationComponent = ({
  currentPage,
  lastPage,
  setPageIndex,
}: Props) => {
  const loadMore = () => {
    if (currentPage < lastPage) {
      setPageIndex(currentPage + 1);
    }
  };

  return currentPage < lastPage ? (
    <TouchableOpacity style={styles.button} onPress={loadMore}>
      <Text style={styles.text}>Load More</Text>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    backgroundColor: colors.darkBlue,
    paddingVertical: spacing.medium,
    marginVertical: spacing.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
