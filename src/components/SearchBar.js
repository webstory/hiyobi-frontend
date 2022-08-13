import React, { useEffect, useState, useCallback } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { getAutoComplete } from "../lib/AutoComplete";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";

const SearchBar = ({ search }) => {
  let defaultTag = [];
  if (typeof search !== "undefined") {
    let split = search.split("|");
    defaultTag = split;
  }
  const [tags, setTags] = useState(defaultTag);
  const [savedTags, setSavedTags] = useState(defaultTag);
  const [isLoading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState([]);

  const history = useHistory();
  const params = useParams();

  const getAuto = useCallback(async () => {
    setLoading(true);
    let auto = await getAutoComplete();
    setSuggestion(auto);
    setLoading(false);
  }, []);

  useEffect(() => {
    getAuto();
  }, [getAuto]);

  const onClickSearch = () => {
    let searchstr = savedTags.join("|");
    history.push(`/search/${searchstr}`);
  };

  const transformTag = (tag) => {
    if (tag.value.startsWith("female:") || tag.value.startsWith("여:")) {
      tag.style = "--tag-bg: rgb(255, 94, 94);";
    } else if (tag.value.startsWith("male:") || tag.value.startsWith("남:")) {
      tag.style = "--tag-bg: rgb(65, 149, 244);";
    }
  };

  const onAddTag = (e) => {
    console.log("onadd");
    let tmp = e.detail.tagify.value.map((val) => {
      return val.value;
    });
    setSavedTags(tmp);
  };

  const onRemoveTag = (e) => {
    let tmp = e.detail.tagify.value.map((val) => {
      return val.value;
    });
    setSavedTags(tmp);
  };

  return (
    <BarArea>
      <Tags
        settings={{
          transformTag: transformTag,
          delimiters: "\n",
          callbacks: {
            add: onAddTag,
            remove: onRemoveTag,
          },
          dropdown: {
            enabled: 1,
          },
          loading: true,
        }}
        whitelist={suggestion}
        value={tags}
        style={{ width: "100%" }}
        placeholder={"검색"}
        loading={isLoading}
      />
      <Button onClick={onClickSearch} outline>
        검색
      </Button>
    </BarArea>
  );
};

const BarArea = styled.div`
  display: flex;
  /*align-items: center;
  justify-content: center;
  margin-bottom: 30px;*/
`;

export default SearchBar;
