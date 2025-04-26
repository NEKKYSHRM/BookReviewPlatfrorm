import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function addReview() {
    const navigate = useNavigate();
      const [book, setBook] = React.useState({
        bookId: "",
        a: "",
        description: "",
        coverImage: "",
        genre: [],
        averageRating: "",
      });

  return (
    <div>addReview</div>
  )
}
