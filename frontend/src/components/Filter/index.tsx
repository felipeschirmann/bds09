import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "types/genre";
import { BASE_URL, requestBackend } from "util/requests";

import "./styles.css";

type Props = {
  onSubmitFilter: (data: Genre) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/genres`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setSelectGenres(response.data);
      console.log(response.data);
    });
  }, []);

  const { handleSubmit, control, setValue } = useForm<Genre>();

  const onSubmit = (formData: Genre) => {
    console.log(formData);
    onSubmitFilter(formData);
  };

  const handleSelectChange = (value: Genre) => {
    if (value) {
      setValue("id", value.id);
      setValue("name", value.name);
    }
    console.log(value);
    onSubmitFilter(value);
  };

  return (
    <div className="movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-genre-select-container">
          <Controller
            name="name"
            control={control}
            render={() => (
              <Select
                options={selectGenres}
                isClearable
                placeholder="Gênero"
                classNamePrefix="movie-filter-genre"
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
                onChange={(value) => handleSelectChange(value as Genre)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
export default Filter;
