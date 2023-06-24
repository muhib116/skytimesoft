const { useState } = require("react");

const useHelper = () => {
    const [siteName, setSiteName] = useState("SkyTimeSoft")
    const getSiteName = () => {
        return siteName
    }

    const changeSiteName = (siteName) => {
        setSiteName(() => setSiteName(siteName))
    }
}