export interface SingleStageApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    coordinates: {
      long: string;
      lat: string;
    };
    stage_number: number;
    stage: [
      {
        stage_text_area: [{ stage_text: string }];
      }
    ];
    current_destination: boolean;
    next_year: boolean;
  };
}
export interface SingleDestinationApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    destination_coordinates: {
      destination_long: string;
      destination_lat: string;
    };
    destination_number: number;
    destination_text_fields: [
      {
        destination_text: [{ stage_text: string }];
      }
    ];
    next_year_destination: boolean;
  };
}

export interface SingleStageProps {
  id: number;
  title: string;
  coordinates: {
    long: string;
    lat: string;
  };
  number: number;
  text_area: string;
  current: boolean;
  next_year: boolean;
}