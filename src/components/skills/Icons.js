import "./Skills.scss"

function GetIcon(name) {
    switch (name.item.toLowerCase()) {
        case "java":
            return "https://img.icons8.com/color/240/undefined/java-coffee-cup-logo--v1.png";
        case "go":
            return "https://img.icons8.com/color/240/undefined/golang.png";
        case "react":
            return "https://img.icons8.com/officel/240/undefined/react.png";
        case "aws":
            return "https://img.icons8.com/color/240/undefined/amazon-web-services.png";
        case "docker":
            return "https://img.icons8.com/fluency/240/undefined/docker.png";
        case "kubernetes":
            return "https://img.icons8.com/color/240/undefined/kubernetes.png";
        case "terraform":
            return "https://img.icons8.com/color/240/undefined/terraform.png";
        case "shell":
            return "https://img.icons8.com/plasticine/200/undefined/bash.png";
        default:
            return "";
    }
}

export default GetIcon;
