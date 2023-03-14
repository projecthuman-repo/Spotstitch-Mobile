import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Button from '../Button'

export default function ComponentCarousel({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const numberOfComponents = React.Children.count(children)

  const handleNext = () => {
    if (activeIndex < numberOfComponents - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const handleBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  // Track the active index
  React.useEffect(() => {
    console.log('activeIndex', activeIndex)
  }, [activeIndex])

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        {React.Children.map(children, (child, index) => {
          return activeIndex === index ? child : null
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={[
            styles.button,
            {
              backgroundColor: 'transparent',
            },
          ]}
          onPress={handleBack}
        >
          <Text style={styles.buttonText}>Back</Text>
        </Button>

        <Button style={styles.button} mode="contained" onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </View>
    </View>
  )
}
