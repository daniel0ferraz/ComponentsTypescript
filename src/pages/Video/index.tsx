import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
	return (
		<>
			<ReactPlayer
				playing={false}
				controls={true}
				url="https://stapplessprdimages.blob.core.windows.net/miscimages/tribanco-unica-welcome.mp4"
			/>
		</>
	);
}
