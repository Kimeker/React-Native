import { Button, View, StyleSheet } from "react-native";
import { Buttons } from "../styles";

export default function Knappen() {
    return (
        <View style={styles.storKnapp}>
            <Button title="Klicka här" />
        </View>
    );
}

const styles = StyleSheet.create({
    litenKnapp: {
        ...Buttons.smallRounded,
    },
    storKnapp: {
        ...Buttons.largeRounded,
    },
});

