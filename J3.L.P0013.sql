USE [master]
GO
/****** Object:  Database [J3.L.P0013]    Script Date: 10/28/2019 9:41:28 PM ******/
CREATE DATABASE [J3.L.P0013]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'J3.L.P0013', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0013.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'J3.L.P0013_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0013_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [J3.L.P0013] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [J3.L.P0013].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ARITHABORT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [J3.L.P0013] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [J3.L.P0013] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [J3.L.P0013] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [J3.L.P0013] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET  DISABLE_BROKER 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [J3.L.P0013] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [J3.L.P0013] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [J3.L.P0013] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [J3.L.P0013] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [J3.L.P0013] SET RECOVERY FULL 
GO
ALTER DATABASE [J3.L.P0013] SET  MULTI_USER 
GO
ALTER DATABASE [J3.L.P0013] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [J3.L.P0013] SET DB_CHAINING OFF 
GO
ALTER DATABASE [J3.L.P0013] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [J3.L.P0013] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [J3.L.P0013] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'J3.L.P0013', N'ON'
GO
USE [J3.L.P0013]
GO
/****** Object:  Table [dbo].[product]    Script Date: 10/28/2019 9:41:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](250) NULL,
	[price] [float] NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([id], [name], [price]) VALUES (1, N'Lorem ipsum dolor sit amet', 2)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (2, N'consectetuer adipiscing elit', 25)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (3, N'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat', 30)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (4, N'Ut wisi enim ad minim veniam', 56)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (5, N'quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat', 43)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (6, N'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat', 546)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (7, N'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi', 234)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (8, N'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum', 456)
SET IDENTITY_INSERT [dbo].[product] OFF
USE [master]
GO
ALTER DATABASE [J3.L.P0013] SET  READ_WRITE 
GO
