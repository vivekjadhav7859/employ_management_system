import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const WorkFlowCard = () => {
    return (
        <div className='grid grid-cols-3 mb-5 mt-[-600px] ml-[200px]'>
            <Card className="w-72 mx-auto shadow-2xl">
                <CardHeader floated={false} className="h-80 shadow-none">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
            </Card>
            <Card className="w-72 mx-auto shadow-2xl">
                <CardHeader floated={false} className="h-80 shadow-none">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
            </Card>
            <Card className="w-72 mx-auto shadow-2xl">
                <CardHeader floated={false} className="h-80 shadow-none">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default WorkFlowCard
