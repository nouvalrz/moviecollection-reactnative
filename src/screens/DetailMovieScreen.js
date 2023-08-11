import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { MovieExplanation } from '../components/MovieComponent';

const DetailMovieScreen = (props) => {
  const movie = props.route.params.item;

  useEffect(() => {
    console.log(movie);
  }, [])
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.movieContainer}>
          <View style={styles.middle}>
            <Image
              style={styles.image}
              source={{ uri: movie.imageLink }}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
          <MovieExplanation
            name="Release year"
            value={movie.year}
          />
          <MovieExplanation
            name="Starring"
            value={movie.starring}
          />
          <MovieExplanation
            name="Description"
            value={movie.description}
          />
          <MovieExplanation
            name="Viewers"
            value={movie.viewers}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          {/* <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          />
          <MovieExplanation
            name="Rating"
            rating={movie.rating}
            isRating={true}
          /> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  movieContainer: {
    padding: 8,
    margin: 8
  },
  middle: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffbe7bff'
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: 'salmon',
    borderRadius: 10,
    color: 'white'
  }
})

export default DetailMovieScreen