import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "types/genre";
import { BASE_URL, requestBackend } from "util/requests";

import "./styles.css";

const Filter = () => {
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

  const { register, handleSubmit, control, getValues } = useForm<Genre>();

  const onSubmit = (formData: Genre) => {
    console.log(formData);
  };

  const handleSelectChange = (value: Genre) => {
    console.log(value);
  };

  return (
    <div className="movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            render={() => (
              <Select
                options={selectGenres}
                isClearable
                classNamePrefix="movie-filter"
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
