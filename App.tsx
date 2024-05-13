import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [expression, setExpression] = useState<string>("0");

  const handlePress = (value: string) => {
    if (expression === '0') {
      setExpression(value);
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };


  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("0");
  };

  const handleDelete = () => {
    if (expression !== '0') {
      setExpression(prevExpression => prevExpression.slice(0, -1));
    }
  };


  return (<>
    <View style={{ backgroundColor: "#000" }}>
      <Text style={styles.expression}>{expression}</Text>
    </View>

    <View style={styles.container}>

      <View style={{ alignItems: 'flex-end', right: "-35%" }}>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="backspace" size={36} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 2, height: 1, backgroundColor: '#444', width: '95%', marginBottom: 10 }}></View>
      <View style={styles.row}>

      </View>
      <View style={styles.row}>
        <Button
          onPress={clearExpression}
          mode="outlined"
          style={[styles.button, { justifyContent: "center", alignItems: 'center' }]}
          labelStyle={{ color: "#FF9500", fontSize: 20 }}
        >
          C
        </Button>
        <Button
          onPress={() => handlePress('( )')}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "green", fontSize: 20 }}
          disabled={true}
        >
          ( )
        </Button>
        <Button
          onPress={() => handlePress('%')}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "green", fontSize: 20 }}
          disabled={true}
        >
          %
        </Button>
        <Button
          onPress={() => handlePress('/')}
          mode="outlined"
          style={[styles.button,]}
          labelStyle={{ color: "green", fontSize: 20 }}
        >
          /
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("7")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          7
        </Button>
        <Button
          onPress={() => handlePress("8")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          8
        </Button>
        <Button
          onPress={() => handlePress("9")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          9
        </Button>
        <Button
          onPress={() => handlePress("*")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "green", fontSize: 20 }}
        >
          x
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("4")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          4
        </Button>
        <Button
          onPress={() => handlePress("5")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          5
        </Button>
        <Button
          onPress={() => handlePress("6")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          6
        </Button>
        <Button
          onPress={() => handlePress("-")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "green", fontSize: 20 }}
        >
          -
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("1")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          1
        </Button>
        <Button
          onPress={() => handlePress("2")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          2
        </Button>
        <Button
          onPress={() => handlePress("3")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          3
        </Button>
        <Button
          onPress={() => handlePress("+")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "green", fontSize: 20 }}
        >
          +
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("0")}
          mode="outlined"
          style={[
            styles.button,
          ]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          +/_
        </Button>
        <Button
          onPress={() => handlePress("0")}
          mode="outlined"
          style={[
            styles.button,
          ]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          0
        </Button>
        <Button
          onPress={() => handlePress(".")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          .
        </Button>
        <Button
          onPress={calculateResult}
          mode="contained"
          style={[
            styles.button,
            { backgroundColor: "green" },
          ]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
        >
          =
        </Button>
      </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  expression: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'right',
    marginRight: "10%",
    marginTop: "20%"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "-30%",
    marginVertical: "1%",
  },
  button: {
    backgroundColor: "#222",
    width: 85,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
    color: "#fff",
    marginRight: "2%",
  },
});