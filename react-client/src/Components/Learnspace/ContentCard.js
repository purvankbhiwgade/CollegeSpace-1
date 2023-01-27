import { Card } from "@mui/material";
import React from "react";
import ContentCardItem from "./ContentCardItem";
import { Grid } from "@mui/material";

const ContentCard = ({ contentList }) => {
  return (
    <Card>
      <div className="cards__container">
        <ul className="cards__items">
          <Grid container direction="row">
            {contentList.length >= 1 ? (
              contentList.map((content) => (
                <Grid item xs={6} md={4}>
                  <ContentCardItem
                    srce={content.img}
                    text={content.name}
                    description={content.author}
                    path={content.url}
                  />
                </Grid>
              ))
            ) : (
              <div>
                <h2>Your search doesn't have any matching results</h2>
              </div>
            )}
          </Grid>
        </ul>
      </div>
    </Card>
  );
};

export default ContentCard;
