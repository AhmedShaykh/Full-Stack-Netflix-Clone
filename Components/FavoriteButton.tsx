import React, { FC, useCallback, useMemo } from "react";
import useCurrentUser from "@/Hooks/useCurrentUser";
import useFavorites from "@/Hooks/useFavorites";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";

interface FavoriteButtonProps {
    movieId: string
};

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
    return (
        <div>FavoriteButton</div>
    )
};

export default FavoriteButton;