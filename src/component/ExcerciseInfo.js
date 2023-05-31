import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseData, getdata, youTubeoptions } from "../getdata";
import Details from "./Details";
import ExcerciseVideo from "./ExcerciseVideo";

const ExcerciseInfo = () => {
  const [excerciseDetails, setExcerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await getdata(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseData
      );
      setExcerciseDetails(exerciseDetailData);
      const exerciseVideosData = await getdata(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youTubeoptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      // setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      // setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Details excerciseDetails={excerciseDetails} />
      <ExcerciseVideo
        exerciseVideos={exerciseVideos}
        name={excerciseDetails?.name}
      />
    </div>
  );
};

export default ExcerciseInfo;
