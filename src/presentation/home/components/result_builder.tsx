import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Paper } from "@mui/material";
import { useHomeBloc } from "../../../application/home/home_bloc";
import { ImageComponent } from './image';

export const ResultBuilder = () => {
    const { analyzis } = useHomeBloc();

    const Text = styled.p`
        width: 30rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
    if (analyzis === undefined) {
        return <></>;
    }
    return (
        <div css={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
        })}>
            <h2> Resultados </h2>

            {analyzis?.result.map((doc) => {
                const fromMinutes = Math.floor(doc.from / 60);
                const fromSeconds = Math.trunc(doc.from - fromMinutes * 60);
                const toMinutes = Math.floor(doc.to / 60);
                const toSeconds = Math.trunc(doc.to - toMinutes * 60);
                const fromString = `${fromMinutes}:${fromSeconds < 10 ? "0" : ""}${fromSeconds}`;
                const toString = `${toMinutes}:${toSeconds < 10 ? "0" : ""}${toSeconds}`;
                return (
                    <Paper key={doc.filename}
                        sx={{
                            padding: "2rem",
                            maxWidth: "35rem",
                            minWidth: "35rem",

                        }} elevation={3}>
                        <div>
                            <div css={css({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            })}>
                                <ImageComponent src={doc.image} width="20rem" />
                            </div>
                            <Text> {doc.filename} </Text>
                            <Text> Episódio {doc.episode ?? 1} </Text>
                            <Text> Entre {fromString} - {toString}</Text>
                            <Text> Similaridade {parseFloat(doc.similarity.toFixed(4)) * 100}% </Text>
                        </div>
                        <Button variant="contained" onClick={() => {
                            const link = `https://anilist.co/anime/${doc.anilist}`;
                            console.log(link);
                            window.open(link)
                        }}>
                            Ver no anilist
                        </Button>
                    </Paper >
                )
            })}

        </div >
    )
}